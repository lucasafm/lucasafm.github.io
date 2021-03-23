import React, { useContext } from 'react'
import MainContext from '../../../Context/Main/MainContext'
import styles from './Projects.module.css'

const Projects = () => {
    const { language, mode } = useContext(MainContext)
    return (
        <div id='projects'>
            <div className={mode === 'Dark' ? styles.fakeDivDark : styles.fakeDivLight}></div>
            <p className={styles.projectsP}>Projects</p>
            <p className={styles.projectsP}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed orci lectus. Nulla et urna nec felis mollis commodo. Aliquam pulvinar viverra nisl, sed ullamcorper nisi fringilla sit amet. Morbi et ligula id libero suscipit rutrum. Aenean tincidunt nulla pellentesque elit egestas suscipit. Sed nec elit lacinia, posuere urna ac, molestie dui. Pellentesque nec dui interdum, pretium urna eget, finibus lacus. Morbi gravida odio orci, eu condimentum dui vehicula a. Ut eleifend ac elit vel pharetra. In gravida eleifend velit, ac sodales sem eleifend sit amet. Nullam eget metus egestas, consectetur odio sit amet, interdum leo. Phasellus efficitur laoreet interdum.

Praesent ornare magna nisi, sit amet interdum erat scelerisque sed. Vivamus porttitor non metus in posuere. Etiam ut tellus in ligula auctor tincidunt. Donec eros lacus, egestas eu posuere at, vulputate eget nibh. In eget tincidunt justo. Phasellus justo nisl, tristique posuere cursus nec, porttitor pulvinar ante. Vestibulum odio quam, rutrum id finibus vitae, congue at orci. Suspendisse congue magna vitae leo vehicula commodo. Proin id nunc lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque aliquet nisi sit amet congue sollicitudin. Etiam a augue volutpat, gravida leo ut, dignissim purus. Nullam hendrerit a libero sed rutrum. Integer sollicitudin, tortor eget posuere luctus, leo mauris pellentesque nisi, quis commodo nunc ex et enim.

Nullam consequat sem sed quam viverra elementum. Nam ac ex et orci interdum suscipit in eu est. Sed lobortis risus ut lectus pulvinar, eget ornare massa malesuada. Maecenas erat elit, dignissim vel arcu in, congue tempor ex. Praesent et pretium odio. Aliquam sapien quam, tincidunt a rhoncus nec, dapibus nec urna. Nunc eleifend, felis sit amet efficitur pharetra, tellus lectus consequat augue, quis sollicitudin turpis erat sit amet neque. Donec nunc diam, tristique ut iaculis vel, fermentum ut ligula. Aliquam id justo vitae sapien eleifend eleifend. Proin vestibulum, metus sit amet suscipit aliquam, arcu nisl sodales sapien, a hendrerit nunc tellus id orci. Suspendisse potenti. Mauris sit amet metus placerat libero condimentum porttitor vitae id arcu. Vivamus facilisis eu justo at sodales. Praesent ut augue ultrices, egestas ante a, tempor diam.

Morbi ac faucibus turpis. Aliquam euismod malesuada cursus. Curabitur felis metus, aliquam ac egestas ut, congue at est. Sed nec justo laoreet, consectetur nibh ac, elementum sem. Nam vulputate urna vitae magna ultrices pulvinar. Nam malesuada ipsum urna, id ultricies lectus suscipit quis. Morbi ultricies ipsum nibh, sit amet posuere sapien ultrices a. Vestibulum hendrerit turpis finibus purus eleifend congue. Fusce luctus dolor eget fringilla hendrerit. Aenean in lobortis eros. Aenean eleifend nulla ac sapien tristique, vitae lacinia tortor euismod. Curabitur efficitur placerat eros eu pellentesque. Sed feugiat eu risus ut convallis. Fusce convallis lorem ac mi tincidunt, id bibendum urna eleifend. Vivamus et porttitor tellus. Mauris pretium non massa et lacinia.

Suspendisse eget elit id tortor sodales finibus. Mauris ultrices tortor vel tellus porta imperdiet. Fusce lacinia consequat tellus nec fringilla. Aenean id volutpat dui, feugiat sollicitudin urna. Phasellus ac suscipit tellus, id blandit massa. Aenean convallis auctor consequat. Sed vulputate orci vel erat luctus convallis. Curabitur aliquam at massa vitae mollis. Nunc eu erat condimentum felis posuere laoreet. Aliquam iaculis libero vitae rhoncus eleifend. Vivamus eleifend sit amet dui nec interdum. Vivamus ut enim neque. Quisque eleifend, quam rutrum luctus semper, tortor leo iaculis erat, id mollis nisl libero quis nisl. Proin lobortis eros vitae aliquam ultrices. Vestibulum eu urna et lorem cursus semper vitae sit amet neque. Etiam id turpis rhoncus, eleifend nibh eget, commodo nibh.</p>
        </div>
    )
}

export default Projects;